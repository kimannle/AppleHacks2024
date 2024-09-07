from .db import DB, User
import bcrypt
from models.activity import Activity
from models.affirmation import Affirmation



class AUTH:
    
    def __init__(self) -> None:
        self.db = DB()

    def add_activity_to_db(self, activity_description: str, status: bool=False) -> Activity | None:
        return self.db.add_activity(activity=activity_description, status=status)

    def init_activities(self, activities: list[str]) -> None:
        for activity in activities:
            self.add_activity_to_db(activity)

    def add_affirmation_to_db(self, affirmation_description: str, status: bool=False) -> Affirmation | None:
        return self.db.add_affirmation(affirmation=affirmation_description, status=status)

    def init_affirmations(self, affirmations: list[str]) -> None:
        for affirmation in affirmations:
            self.add_affirmation_to_db(affirmation)

    def register_user(self, **kwargs):
        for key in kwargs.keys():
            if hasattr(User, key) is False:
                raise ValueError("use valid user registration properties")
        data = {
                "username":  kwargs.get('username'),
                "password" : bcrypt.hashpw(kwargs.get('password'), bcrypt.gensalt()),
                "email" : kwargs.get('email')
            }
        existing_usr = self.db.findusr(data.get("username"))
        if existing_usr:
            return None
        
        newusr = self.db.regusr(**data)
        return newusr
        
    def login(self, **kwargs):
        user = self.db.findusr(kwargs.get('username'))
        if user and user.username == kwargs.get('username'):
            if bcrypt.checkpw(kwargs.get('password').encode('utf-8'), user.password):
                return user
        return None