var OpenAI_key = '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'

curl https://api.openai.com/v1/completions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer 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" \
-d '{"model": "text-davinci-002", "prompt": "My name is Matthew Zehnder and I", "temperature": 0.5, "max_tokens": 10, "echo": true}'
