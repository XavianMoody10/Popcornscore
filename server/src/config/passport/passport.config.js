import passport from "passport";
import LocalStrategy from "passport-local";
import { User } from "../../models/user.model.js";
import { compareHashedPasword } from "../../helpers/compareHashedPassword.js";

passport.use(
  new LocalStrategy.Strategy(
    { usernameField: "email" },
    async (username, password, done) => {
      try {
        const user = await User.findOne({ email: username });

        if (!user) {
          return done(null, false, { message: "Email is not registered" });
        }

        const unhashedPassword = await compareHashedPasword(
          password,
          user.password
        );

        if (user.password === unhashedPassword) {
          return done(null, false, { message: "Invalid credentials" });
        }

        const result = await User.findOne({ email: username }).select(
          "-__v -password"
        );

        return done(null, result);
      } catch (error) {
        return done(error, false);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id).select("-__v -password");
    done(null, user);
  } catch (error) {
    return done(error, false);
  }
});

export { passport };
