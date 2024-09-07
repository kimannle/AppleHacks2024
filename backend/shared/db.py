from sqlalchemy import create_engine
from . import BASE
from sqlalchemy.orm import sessionmaker, Session
from models.user import User
from models.activity import Activity
from models.affirmation import Affirmation
from sqlalchemy.exc import NoResultFound

class DB:
    def __init__(self) -> None:
        self.engine = create_engine("sqlite:///db.db", echo=True)
        self.__session = None
        BASE.metadata.drop_all(self.engine)
        BASE.metadata.create_all(self.engine)
        
    @property
    def _session(self) -> Session:
        if self.__session is None:
            on_session = sessionmaker(bind=self.engine)
            self.__session = on_session()
        return self.__session
    
    def regusr(self, **kwargs) -> User | None:
        user = User()
        for key, val in kwargs.items():
            user.__setattr__(key, val)
        try:
            self._session.add(user)
            self._session.commit()
            return user
        except Exception as e:
            self._session.rollback()
            return None

    def findusr(self, query) -> User | None:
        result = self._session.query(User).filter_by(username=query).first()
        return result
    
    
    def add_activity(self, **kwargs) -> Activity | None:
        activity = Activity()
        for key in kwargs.keys():
            if not hasattr(Activity, key):
                raise ValueError("INVALID MAPPINGS")

        for key, value in kwargs.items():
            setattr(activity, key, value)
        
        try:
            self._session.add(activity)
            self._session.commit()
            return activity
        except:
            self._session.rollback()
            print(f"Error adding activity: {e}")
            return None

    def add_affirmation(self, **kwargs) -> Affirmation | None:
        affirmation = Affirmation()
        for key in kwargs.keys():
            if not hasattr(Affirmation, key):
                raise ValueError("INVALID MAPPINGS")
        
        for key, value in kwargs.items():
            setattr(affirmation, key, value)

        try:
            self._session.add(affirmation)
            self._session.commit()
            return affirmation
        except:
            self._session.rollback()
            print(f"Error adding affirmation: {e}")
            return None