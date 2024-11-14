import express from "express";

const userRouter = express.Router();

userRouter.post("/", (req, res) => {
  console.log("req.body", req.body);
  res.send(req.body).status(200);
});

userRouter.get("/", (req, res) => {});

export { userRouter };
