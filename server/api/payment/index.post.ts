import z from "zod";
import { withEventLogger } from "~~/server/utils/log";

const bodySchema = z.object({
  id: z.uuid(),
  amount: z.number().min(100000),
  product: z.string(),
  desc: z.string(),
});

export default defineEventHandler(async (event) => {
  const log = withEventLogger(event, {
    scope: "course:detail",
  });

  try {
    await requireUserSession(event);
    const { id, amount, product, desc } = await readValidatedBody(event, bodySchema.parse);

    const externalId = btoa(`invoice_${new Date().getTime()}_${amount}_${id}`);
    const invoiceRes = await createPayment(externalId, amount, product, desc);

    console.log(invoiceRes);
    return invoiceRes;
  } catch (err) {
    throw err;
  }
});
