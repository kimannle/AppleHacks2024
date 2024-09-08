from sqlalchemy import Column, String, Integer, Boolean
from shared import BASE

# will be location of completed user activities

class CompletedActivities(BASE):

    __tablename__ = "CompletedActivities"

    id = Column(Integer, primary_key=True, nullable=False)
    