import { Schema, model } from "mongoose";

const UserSchema = Schema(
  {
    full_name: { type: Schema.Types.String },
    age: { type: Schema.Types.Number },
    email: { type: Schema.Types.String, require: true },
    phone_number: { type: Schema.Types.String },
    gender: {
      type: Schema.Types.String,
      enum: ["Male", "Female", "Others"],
      default: "Male",
    },
    password: { type: Schema.Types.String, require: true },
    is_active: { type: Schema.Types.Boolean, default: true },
    is_deleted: { type: Schema.Types.Boolean, default: false },
  },
  { timestamps: true }
);

const UserModel = model("User", UserSchema);

export { UserModel };
