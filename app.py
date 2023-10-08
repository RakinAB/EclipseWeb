from flask import Flask, request, render_template, jsonify
from flask import Flask, request, render_template
from hugchat import hugchat
from hugchat.login import Login

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate_response', methods=['POST'])
def generate_response():
    try:
        prompt_input = request.form['prompt']

        # Perform chatbot response generation here
        email = "nsaideax@gmail.com"
        passwd = "Ideax@2023"

        # Hugging Face Login
        sign = Login(email, passwd)
        cookies = sign.login()

        # Create ChatBot
        temp = ' explain like I have the average knowledge of a 5th grader'
        prompt_input = prompt_input + temp
        chatbot = hugchat.ChatBot(cookies=cookies.get_dict())
        response = chatbot.chat(prompt_input)

        # Convert the response to a string
        response_text = str(response)
        
        # Return the response as JSON
        return jsonify({"response": response_text})

    except Exception as e:
        return jsonify({"error": str(e)}), 500



if __name__ == '__main__':
    app.run(debug=True)
