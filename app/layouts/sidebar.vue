<template>
    <div>
        <div class="grid grid-cols-6">
            <aside class="col-span-1">
                <div class="sticky top-0 h-[calc(100vh-0px)] overflow-y-auto">
                    <SideBar />
                </div>
            </aside>

            <main class="col-span-5">
                <slot />
            </main>
        </div>
        <div class="relative z-9999 flex justify-center">
            <Footer />
        </div>
    </div>
</template>
