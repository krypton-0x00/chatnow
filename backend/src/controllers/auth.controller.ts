import { Request, Response } from "express";
import client from "../../config/db.config.js";
import jwt from "jsonwebtoken";
interface LoginBodyType {
  name: string;
  email: string;
  provider: string;
  image?: string;
  oauth_id: string;
}

class AuthController {
  static async login(request: Request, response: Response) {
    try {
      const body: LoginBodyType = request.body;
      let findUser = await client.user.findUnique({
        where: {
          email: body.email,
        },
      });

      if (!findUser) {
        findUser = await client.user.create({
          data: body,
        });
      }
      let JWTPayload = { name: body.name, email: body.email, id: findUser.id };
      const token = jwt.sign(JWTPayload, process.env.JWT_SECRET, {
        expiresIn: "15d",
      });
      return response.json({
        message: "User logged in successfully",
        user: {
          ...findUser,
          token: `Bearer ${token}`,
        },
      });
    } catch (error) {
      return response.status(500).json({ message: "Something went wrong" });
    }
  }
}
export default AuthController;
