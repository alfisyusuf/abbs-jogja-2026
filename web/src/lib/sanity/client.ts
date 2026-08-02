import { sanityClient } from "sanity:client";

// Ekspor ulang agar file lain (seperti queries.ts dan image.ts) 
// tetap berfungsi tanpa perlu diubah kodenya.
export { sanityClient };