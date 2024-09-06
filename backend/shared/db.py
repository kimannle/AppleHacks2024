from sqlalchemy import create_engine
from . import BASE
from sqlalchemy.orm.session import Session
from sqlalchemy.orm import sessionmaker




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
    
    def regusr(self, **kwargs):
        try:
            self._session.add(kwargs)
            self._session.commit()
        except Exception as e:
            self._session.rollback()