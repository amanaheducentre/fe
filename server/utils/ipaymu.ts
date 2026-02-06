import ky from "ky";
import dayjs from "dayjs";
import { hmacSHA256, sha256 } from "./cipher";
import { IPAYMU_API_BASE_URL, IPAYMU_API_KEY, IPAYMU_VA } from "./constant.js";
import { APP_API_BASE_URL, APP_BASE_URL } from "~~/constant.js";

export async function createPayment(id: string, amount: number, product: string, desc: string) {
  const body = {
    referenceId: id + ":" + (await hmacSHA256(IPAYMU_API_KEY, id)),
    product: [product],
    qty: [1],
    price: [amount],
    description: [desc],
    returnUrl: APP_BASE_URL + "/dashboard",
    notifyUrl: APP_API_BASE_URL + "/payment/notify",
    feeDirection: "BUYER",
    paymentMethod: "qris,va",
  };

  const bodyEncrypt = await sha256(JSON.stringify(body));
  const stringToSign = "POST:" + IPAYMU_VA + ":" + bodyEncrypt + ":" + IPAYMU_API_KEY;
  const signature = await hmacSHA256(IPAYMU_API_KEY, stringToSign);

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    signature: signature,
    va: IPAYMU_VA,
    timestamp: dayjs().format("YYYYMMDDhhmmss"),
  };

  try {
    const res = await ky
      .post(IPAYMU_API_BASE_URL + "/payment", {
        headers: headers,
        json: body,
      })
      .json();

    console.log(res);
    return res;
  } catch (e: any) {
    throw createError({
      statusCode: 500,
      statusMessage: e.message,
    });
  }
}
