// Generated with CLI
import { getXataClient } from "../../src/xata";
import type { NextApiRequest, NextApiResponse } from "next";

const xata = getXataClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get data submitted in request's body.
  const body = req.body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log("body:", body);

  // submit data to xata database
  const record = await xata.db.myMoods.create({
    Date: new Date().toISOString(),
    Mood: Number(body.mood),
    Motivation: Number(body.motivation),
    Notes: "notes notes",
    Feeling: "feeling",
    SocialButterfly: Number(body.social),
    PeoplePissinYouOff: Number(body.anger),
    YouPissinPeopleOff: Number(body.annoying),
  });

  // optional logging to see the sumitted record
  console.log(record);

  // respond with 200 and the submitted record
  // res.status(200).json(record);
  res.redirect(307, "/dashboard");
}