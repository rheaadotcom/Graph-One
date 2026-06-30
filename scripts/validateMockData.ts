import {
  mockCompanies,
  mockInvestors,
  mockProducts,
} from "../data/mock";

function validateData(name: string, data: any[]) {
  console.log(`Validating ${name}...`);
  const ids = new Set<string>();
  const slugs = new Set<string>();

  data.forEach((item, index) => {
    if (!item.id) {
      console.error(`[${name}] Missing ID at index ${index}`);
    } else if (ids.has(item.id)) {
      console.error(`[${name}] Duplicate ID found: ${item.id}`);
    }
    ids.add(item.id);

    if (item.slug) {
      if (slugs.has(item.slug)) {
        console.error(`[${name}] Duplicate slug found: ${item.slug}`);
      }
      slugs.add(item.slug);
    }
  });
  console.log(`Finished ${name}. Total items: ${data.length}`);
}

validateData("Companies", mockCompanies);
validateData("Investors", mockInvestors);
validateData("Products", mockProducts);
