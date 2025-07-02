const result = await db.query(
    "INSERT INTO users(email, password) VALUES($1, $2)", [username, password]
  );