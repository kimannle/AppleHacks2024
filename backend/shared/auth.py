from .db import DB, User
import bcrypt



class AUTH:
    
    def __init__(self) -> None:
        self.db = DB()

    def register_user(self, **kwargs):
        for key in kwargs.keys():
            if hasattr(User, key) is False:
                raise Exception("use valid user registration properties")
        try:
            data = {
                "username":  kwargs.get('username'),
                "password" : bcrypt.hashpw(kwargs.get('password'), bcrypt.gensalt()),
                "email" : kwargs.get('email')
            }
            self.db.regusr(**data)
            print("user added to db")
        except Exception as e:
            print("{}".format(e))
    
"""    def login(self, **kwargs):
        try:
           user =  self.db.findusr(kwargs.get('username'))
           if user.password"""