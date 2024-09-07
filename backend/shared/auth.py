from .db import DB, User
import bcrypt



class AUTH:
    
    def __init__(self) -> None:
        self.db = DB()

    def register_user(self, **kwargs):
        for key in kwargs.keys():
            if hasattr(User, key) is False:
                raise ValueError("use valid user registration properties")
        data = {
                "username":  kwargs.get('username'),
                "password" : bcrypt.hashpw(kwargs.get('password'), bcrypt.gensalt()),
                "email" : kwargs.get('email')
            }
        existing_usr = self.db.findusr(data.get("email"))
        if existing_usr:
            return None
        
        newusr = self.db.regusr(**data)
        return newusr
        
    def login(self, **kwargs):
        user = self.db.findusr(kwargs.get('username'))
        if user and user.username == kwargs.get('username'):
            if user and bcrypt.checkpw(kwargs.get('password').encode('utf-8'), user.password):
                return user
        return None