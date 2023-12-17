import User from "../models/User.js";

export const Register = async (req, res) => {
  const pattern = /^sup/; // The "i" flag makes the pattern case-insensitive

  const { userName, email, password, phone } = req.body;

  console.log(req.body);

  let roles = ["user"];

  const emailString = String(email);

  if (emailString.includes("supplier")) {
    console.log("user role set");
    roles.push("supplier");
  }

  if (emailString.includes("admin")) {
    console.log("admin role set");
    roles.push("admin");
  }
  
  if (emailString.includes("electrician")) {
    console.log("user electrician");
    roles.push("electrician");
  }
  // create a new User object
  const newUser = new User({ name: userName, email, password, phone, roles });

  try {
    // save the user to the database
    await newUser.save();
    res.status(200).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Error registering user", err);
    res.status(500).json({ message: "Error registering the user!" });
  }
};

export const Login = async (req, res) => {
  const { email, password } = req.body;

  console.log("in the login");

  console.log(req.body);

  //check if the email and password are provided
  if (!email || !password) {
    return res
      .status(404)
      .json({ message: "Email and the password are required" });
  }

  //check for that user in the database
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        //user not found
        return res.status(404).json({ message: "User not found" });
      }

      //compare the provided passwords with the password in the database
      if (user.password !== password) {
        return res.status(404).json({ message: "Invalid Credentials!" });
      }

      // Check if the user has the 'admin' role
      if (user.roles.includes("supplier")) {
        // Redirect to the admin page
        res.status(200).json({ roles: user.roles, data: user });
      } else if (user.roles.includes("admin")) {
        res.status(200).json({ roles: user.roles, data: user });
      } else if (user.roles.includes("electrician")) {
        res.status(200).json({ roles: user.roles, data: user });
      } else {
        // Redirect to the regular user page
        res.status(200).json({ roles: user.roles, data: user });
        // return res.redirect("/user-page");
      }
    })
    .catch((error) => {
      console.log("error in finding the user", error);
      res.status(500).json({ message: "Internal server Error!" });
    });
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    if (!users) {
      return res.send("No users at this time!");
    }
    res.json(users);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};
