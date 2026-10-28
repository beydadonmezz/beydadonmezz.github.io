import { legalRoute } from "@/lib/legal-route";

// Hosted legal page (src/data/legal/): only games that have it get this route.
const route = legalRoute("privacy", "tr");

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
