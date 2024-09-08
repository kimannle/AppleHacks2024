from .db import DB, User
import bcrypt
from models.activity import Activity
from models.affirmation import Affirmation
import random
import json

class AUTH:
    
    def __init__(self) -> None:
        self.db = DB()

    def add_activity_to_db(self, activity_description: str) -> Activity | None:
        return self.db.add_activity(activity=activity_description)

    def init_activities(self, activities: list[str]) -> None:
        for activity in activities:
            self.add_activity_to_db(activity)

    def add_affirmation_to_db(self, affirmation_description: str) -> Affirmation | None:
        return self.db.add_affirmation(affirmation=affirmation_description)

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

    def get_random_activity(self) -> Activity | None:
        activities = self.db.get_all_activities()
        if not activities:
            return None
        return random.choice(activities)

    def get_random_affirmation(self) -> Affirmation | None:
        affirmations = self.db.get_all_affirmations()
        if not affirmations:
            return None
        return random.choice(affirmations)
    
    def complete_activity(self, act_id: int, uid: int) -> bool:
        try:
            activity = self.db.find_activity(act_id)
            user = self.db.findusr(uid)
            
            if isinstance(user, User) and isinstance(activity, Activity):
                if user.completed_activity_ids is None:
                    completed_activity_ids = []
                else:
                    completed_activity_ids = json.loads(user.completed_activity_ids)
                
                completed_activity_ids.append(act_id)
                user.completed_activity_ids = json.dumps(completed_activity_ids)
                self.db._session.commit()
            return user
        except Exception as e:
            print("Error Here: {}".format(e))
            return False

    def complete_affirmation(self, aff_id: int, uid: int) -> bool:
        try:
            affirmation = self.db.find_affirmation(aff_id)
            user = self.db.findusr(uid)
            
            if isinstance(user, User) and isinstance(affirmation, Affirmation):
                if user.completed_affirmation_ids is None:
                    completed_affirmation_ids = []
                else:
                    completed_affirmation_ids = json.loads(user.completed_affirmation_ids)
                
                completed_affirmation_ids.append(aff_id)
                user.completed_affirmation_ids = json.dumps(completed_affirmation_ids)
                self.db._session.commit()
            return user
        except Exception as e:
            print("Error Here: {}".format(e))
            return False