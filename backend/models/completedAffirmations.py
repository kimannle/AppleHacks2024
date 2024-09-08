from sqlalchemy import Column, String, Integer, Boolean, ForeignKey
from shared import BASE

# will be location of completed user affirmations

class CompletedAffirmations(BASE):

    __tablename__ = "CompletedAffirmations"

    id = Column(Integer, primary_key=True, nullable=False)
    affirmation_id = Column(Integer, ForeignKey('Affirmation.id'), nullable=False)
    status = Column(Boolean, nullable=False)