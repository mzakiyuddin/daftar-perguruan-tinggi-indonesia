import fetch from "cross-fetch";
import { z } from "zod";
import { unlinkSync, writeFileSync } from "fs";
import { json2csv } from "json-2-csv";
import { convertCsvToXlsx } from "@aternus/csv-to-xlsx";

const main = async () => {
  const ptSchema = z.array(
    z.object({
      id_sp: z.string().uuid(),
      kode_pt: z.string().trim(),
      nama_pt: z.string(),
    }),
  );

  const response = await fetch("https://api-frontend.kemdikbud.go.id/loadpt");
  const data = ptSchema.parse(await response.json());

  // Save to JSON
  writeFileSync("data/data.json", JSON.stringify(data, null, 2));

  // Save to CSV
  json2csv(data).then((csv) => {
    writeFileSync("data/data.csv", csv);
  });

  // Save to XLSX
  try {
    unlinkSync("data/data.xlsx");
  } catch (err) {
    console.error(err);
  }
  convertCsvToXlsx("data/data.csv", "data/data.xlsx");

  console.log(`Saved ${data.length} data`);
};

main();
