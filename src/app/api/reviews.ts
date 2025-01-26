import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const reviews = [
    { id: 1, name: "Alice", rating: 5, comment: "Fantastic service!" },
    { id: 2, name: "Bob", rating: 4, comment: "Great experience overall." },
    { id: 3, name: "Charlie", rating: 3, comment: "Average, but good value." },
  ];

  res.status(200).json(reviews);
}
