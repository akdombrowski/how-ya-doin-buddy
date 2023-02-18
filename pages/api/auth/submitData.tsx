// Generated with CLI
import { getXataClient } from "./xata";
const xata = getXataClient();

const record = await xata.db.myMoods.create({
  Date: new Date("2000-01-01T00:00:00Z"),
  Mood: 3,
  Motivation: 3,
  Notes: "longer text",
  Feeling: "string",
});
console.log(record);
