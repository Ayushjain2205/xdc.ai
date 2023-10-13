export default async function handler(req, res) {
  try {
    const { query } = req.body;

    // Log the request data
    console.log("Request data:", query);

    const API_KEY = process.env.OPENAI_API_KEY;
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a AI agent for The XDC Blockchain. You are supposed to answer questions keeping this in mind. Give output in a well formated higlighted markdown. Format it in markdown.",
          },
          { role: "user", content: query },
        ],
      }),
    };

    const response = await fetch(API_URL, requestOptions);
    const data = await response.json();
    const generatedMessage = data.choices[0].message.content;

    if (generatedMessage === "None") {
      // Make recursive call without the system prompt
      const recursiveResponse = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: query }],
        }),
      });

      const recursiveData = await recursiveResponse.json();
      const recursiveGeneratedMessage =
        recursiveData.choices[0].message.content;

      res.status(200).json({ message: recursiveGeneratedMessage });
    } else {
      res.status(200).json({ message: generatedMessage });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
}
