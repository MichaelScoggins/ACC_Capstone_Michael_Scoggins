DROP TABLE IF EXISTS users, usersCredentials, usersProfiles, usersPrefs, strainSpecies, usersPreLogs, usersExpReviews;

CREATE TABLE usersCredentials (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50),
  password VARCHAR(200),
  email VARCHAR(50),
  PRIMARY KEY (id, username),
  UNIQUE KEY (username)
);

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(50),
  lastName VARCHAR(50),
  username VARCHAR(50),
  PRIMARY KEY (id),
  FOREIGN KEY (username) REFERENCES usersCredentials (username)
);

CREATE TABLE usersProfiles (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50),
  exp TEXT(50),
  firstExp INT,
  freq TEXT(250),
  activityPrefs TEXT(300),
  nearbyStrains TEXT(99),
  PRIMARY KEY (id),
  FOREIGN KEY (username) REFERENCES usersCredentials (username)
  );
    
  CREATE TABLE usersPrefs (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50),
  flavorPrefs VARCHAR(300),
  posPrefs VARCHAR(300),
  negPrefs VARCHAR(150),
  medicalConditions VARCHAR(300),
  speciesPref VARCHAR(50),
  PRIMARY KEY (id),
  FOREIGN KEY (username) REFERENCES usersCredentials (username)
  );  
   
  CREATE TABLE usersFavorites (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50),
  strainId INT NOT NULL,
  strainName VARCHAR(30),
  strainSpecies VARCHAR(25),
  PRIMARY KEY (id),
  FOREIGN KEY (username) REFERENCES usersCredentials (username)
  );  
  
  CREATE TABLE usersPreLogs (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50),
  strainId VARCHAR(50),
  strainName VARCHAR(50),
  strainSpecies VARCHAR(50),
  preWhen VARCHAR(50),
  preMood TEXT(100),
  sessionPurpose TEXT(300),
  expectToAchieve TEXT(250),
  lingeringWorries TEXT(200),
  goal TEXT(200),
  alreadyDone TEXT(500),
  todo TEXT(500),
  PRIMARY KEY (id, username),
  FOREIGN KEY (username) REFERENCES usersCredentials (username)
  );  
  
  CREATE TABLE usersExpReviews (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50),
  session_id INT NOT NULL,
  strainId VARCHAR(50),
  strainName VARCHAR(50),
  strainSpecies VARCHAR(50),
  budDescript TEXT(30),
  goodFor TEXT(250),
  transformedMood TEXT(100),
  transformedExpectations TEXT(500),
  experience TEXT(500),
  transformedWorries TEXT(500),
  transformedGoals TEXT(500),
  disappointments TEXT(500),
  wouldChangeNextTime TEXT(500),
  wouldRecommend BOOLEAN,
  PRIMARY KEY (id, username, session_id),
  FOREIGN KEY (username) REFERENCES usersCredentials (username),
  FOREIGN KEY (session_id) REFERENCES usersPreLogs (id)
    ON DELETE CASCADE
  );