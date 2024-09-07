from flask import Flask, jsonify, request
from flask_cors import CORS
import random
from shared.auth import AUTH
import bcrypt

app = Flask(__name__)
CORS(app)

AUTH = AUTH()


@app.route("/", methods=['GET'])
def root():
    return "WELCOME TO FLASK"

@app.route("/register", methods=['GET'])
def register():
    """
    EXAMPLE USAGE: 
    http://localhost:5000/register?username=kim&password=123456&email=lolly
    
    """
    username = request.args.get('username')
    pwd = request.args.get('password').encode('utf-8')
    email = request.args.get('email')
    try:
        user = AUTH.register_user(username=username, password=pwd, email=email)
        if user is None:
            return "error registering user, user may already exist"
        return jsonify({"ID": user.id, "email": user.email, "username": user.username})
    except ValueError as e:
        return "{}".format(e)

@app.route("/login", methods=['GET'])
def login():
    username = request.args.get('username')
    pwd = request.args.get('password')

    try:
        user = AUTH.login(username = username, password = pwd)
        if user is None:
            return "Error logging in user"
        return jsonify({"ID": user.id, "email": user.email, "username": user.username})

    except ValueError as e:
        return "{}".format(e)


"""@app.route("/members", methods=['GET'])
def members():
    return jsonify({"members": ["Member1", "Member2", "Member3"]})

@app.route("/daily-activity", methods=['GET'])
def daily_activity():
    activities = [
        "Make your bed",
        "Touch your toes",
        "Open your curtains",
        "Brush your teeth",
        "Brush your hair",
        "Organize your bathroom counters",
        "Watch your favorite tv show",
        "Watch your favorite movie",
        "Play a board game",
        "Tell someone in your life you're thankful for them",
        "Look up volunteer opportunities",
        "Smile",
        "Stand in the middle of your room and turn 3 turns",
        "Do 5 jumping jacks and at the end strike a pose",
        "Strike a pose",
        "Put salt on your tongue",
        "Eat breakfast",
        "Go to a breakfast place and treat yourself",
        "Vacuum your floors",
        "Do your laundry",
        "Hang up your clothes",
        "Go get yourself a cute drink",
        "Do skin care",
        "Do hair care",
        "Go to the park",
        "Bird watch",
        "Plane watch",
        "Put on your favorite outfit",
        "Put on the piece of clothing you've always wanted to wear but never did",
        "Blink 3x slowly",
        "Meditate for 5 minutes",
        "Do 10 minutes of yoga",
        "Hold a plank for as long as you can",
        "Eat a piece of fruit",
        "Make some soup",
        "Stick your tongue out",
        "Pick up pieces of trash",
        "Donate old clothing",
        "Donate school supplies to those in need",
        "Donate pet food to an animal shelter",
        "Organize one thing",
        "Write a positive note to yourself",
        "Draw a picture",
        "Sing your favorite song",
        "Dance like nobody's watching",
        "Take a 10-minute walk",
        "Write down three things you're grateful for",
        "Try a new recipe",
        "Call a friend or family member",
        "Read a chapter of a book",
        "Take a bubble bath",
        "Plant a seed or water a plant",
        "Write a letter to your future self",
        "Try a new hobby for 10 minutes",
        "Listen to your favorite music",
        "Do a puzzle",
        "Take a photo of something beautiful",
        "Write a poem",
        "Try a breathing exercise",
        "Watch a funny video",
        "Make a list of your favorite things",
        "Try a new exercise",
        "Write a short story",
        "Make a vision board",
        "Try a new hairstyle",
        "Write a thank you note",
        "Do a random act of kindness",
        "Make a craft",
        "Write down your goals",
        "Try a new food",
        "Take a nap",
        "Write a journal entry",
        "Make a playlist of your favorite songs",
        "Do a crossword puzzle",
        "Try a new sport",
        "Make a scrapbook",
        "Write a letter to someone you admire",
        "Try a new meditation technique",
        "Make a list of things that make you happy",
        "Do a random stretch",
        "Write a list of your accomplishments",
        "Try a new app or game",
        "Make a list of places you want to visit",
        "Write a letter to your past self",
        "Try a new workout routine",
        "Make a list of your favorite quotes",
        "Write a letter to someone you miss",
        "Try a new relaxation technique",
        "Make a list of things you love about yourself",
        "Write a letter to someone who has helped you",
        "Try a new recipe for a healthy snack",
        "Make a list of things you want to learn",
        "Write a letter to someone you forgive",
        "Try a new creative activity",
        "Make a list of your favorite memories",
        "Write a letter to someone you want to reconnect with",
        "Try a new way to relax",
        "Make a list of things you're proud of",
        "Write a letter to someone you want to thank",
        "Try a new way to express yourself"
    ]

    selected_activity = random.choice(activities)
    return jsonify({"dailyActivity": selected_activity})

@app.route("/daily-affirmation", methods=['GET'])
def daily_affirmation():
    affirmations = [
        "Tell yourself that you deserve all good things",
        "Be kind to yourself today",
        "Let yourself rest",
        "Be okay with who you are",
        "Know that you have done your best",
        "Show up for yourself today",
        "Rely on others",
        "Embrace your uniqueness",
        "Trust your journey",
        "Believe in your dreams",
        "You are stronger than you think",
        "Happiness is within your reach",
        "You deserve love and respect",
        "Your dreams are valid",
        "Every step you take is progress",
        "You have the power to create change",
        "Your potential is limitless",
        "You are worthy of all the good things in life",
        "You can handle anything that comes your way",
        "You are surrounded by love and support",
        "Your past does not define you",
        "The future is bright",
        "You are a beautiful person inside and out",
        "You inspire others",
        "It's okay to be a work in progress",
        "Success is within your reach",
        "You are a beacon of light",
        "You create your own destiny",
        "Positivity flows through you",
        "You are a masterpiece in the making",
        "You are a warrior",
        "You bring joy to those around you",
        "You are a gift to the world",
        "You radiate positivity",
        "You are a light in the darkness",
        "You have a beautiful soul",
        "You are powerful beyond measure",
        "Your uniqueness is your strength",
        "Love flows through you",
        "Kindness is your superpower",
        "Compassion is your nature",
        "Generosity comes naturally to you",
        "Thoughtfulness is your strength",
        "Caring is your essence",
        "Forgiveness is your gift",
        "Patience is your virtue",
        "Wisdom guides you",
        "Strength is within you",
        "Bravery is your hallmark",
        "Confidence is your ally",
        "Capability defines you",
        "Talent shines through you",
        "Creativity is your essence",
        "Intelligence is your asset",
        "Hard work is your path",
        "Determination drives you",
        "Focus is your tool",
        "Motivation fuels you",
        "Discipline is your guide",
        "Success is your destiny",
        "Happiness is your choice",
        "Peace is within you",
        "Calmness is your state",
        "Relaxation is your right",
        "Balance is your goal",
        "Groundedness is your foundation",
        "Centeredness is your core",
        "Mindfulness is your practice",
        "Presence is your gift",
        "Gratitude fills your heart",
        "Joy is your birthright",
        "Love is your essence",
        "Kindness is your nature",
        "Compassion is your strength",
        "Generosity is your habit",
        "Thoughtfulness is your way",
        "Caring is your nature",
        "Forgiveness is your power",
        "Patience is your strength",
        "Wisdom is your guide",
        "Strength is your foundation",
        "Bravery is your path",
        "Confidence is your companion",
        "Capability is your trait",
        "Talent is your gift",
        "Creativity is your spark",
        "Intelligence is your tool",
        "Hard work is your journey",
        "Determination is your drive",
        "Focus is your strength",
        "Motivation is your energy",
        "Discipline is your path",
        "Success is your reward",
        "Happiness is your state",
        "Peace is your essence",
        "Calmness is your nature",
        "Relaxation is your right",
        "Balance is your goal",
        "Groundedness is your foundation",
        "Centeredness is your core"
        ]
    selected_affirmation = random.choice(affirmations)
    return jsonify({"dailyAffirmation": selected_affirmation})


"""

if __name__ == "__main__":
    app.run(debug=True)