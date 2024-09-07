from sqlalchemy import Column, Integer, String
from shared import BASE


class User(BASE):
    __tablename__ = "user"
    
    id = Column(Integer, primary_key=True, unique=True)
    username = Column(String(250), nullable=False)
    password = Column(String(250), nullable=False)
    email = Column(String(250), nullable=False)