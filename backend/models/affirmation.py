from sqlalchemy import Column, String, Integer, Boolean
from shared import BASE

class Affirmation(BASE):
    __tablename__ = "Affirmation"

    id = Column(Integer, primary_key=True, nullable=False)
    affirmation = Column(String(250), nullable=False)
    status = Column(Boolean, nullable=False)
    