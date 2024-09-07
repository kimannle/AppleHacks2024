from sqlalchemy import create_engine
from . import BASE
from sqlalchemy.orm import sessionmaker, Session
from models.user import User
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