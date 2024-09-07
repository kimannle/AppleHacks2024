from sqlalchemy import Column, String, Integer, Boolean
from shared import BASE


class Activity(BASE):

    __tablename__ = "Activity"
    
    id = Column(Integer, primary_key=True, nullable=False)
    activity = Column(String(250), nullable=False)
    status = Column(Boolean, nullable=False)