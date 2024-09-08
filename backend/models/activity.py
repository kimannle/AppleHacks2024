from sqlalchemy import Column, String, Integer, Boolean
from shared import BASE

# THIS IS READ ONLY, FOR STORAGE OF THE STRINGS

class Activity(BASE):

    __tablename__ = "Activity"
    
    id = Column(Integer, primary_key=True, nullable=False)
    activity = Column(String(250), nullable=False)
    status = Column(Boolean, nullable=False)