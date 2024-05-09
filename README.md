# COMPSCI 732 / SOFTENG 750 project - Team Noble Nightingales


# How To Run This Web App

Before running the application, it is important for you to have a basic initial understanding of the project structure. 
- Frontend section consists of the react app, and the express frontend server
- Backend section consists of 6 Java Springboot based servers
- Therefore, you would need to run the additional 6 Java Springboot servers to fully run the application
- Overall, this project uses a microservice architecture


Firstly, set up all the environment variables and close the terminal / command prompt

## Set Up Your Java Environment

### Run Using INTELLIJ IDEA (Option One)

- Visit the [JetBrains download page](https://www.jetbrains.com/idea/download/) to download IntelliJ IDEA. Please choose the ultimate edition (we have education license when registered using school email)
- Make sure your intellij is completely closed after setting the environment variables
- Open the `backend` folder in Intellij
- When first loading Intellij, please notice the **Load Maven Modules Pop Up** at the **Right Bottom Corner** of the Intellij screen, if shows up, click on **Load**
- If you missed the pop up, you can either try reopening the `backend` folder
- Alternatively, you can manually trigger a re-import of Maven dependencies:
       - Navigate to `View > Tool Windows > Maven`.
       - In the Maven project window, right-click on your project and select `Reload Project`.
- In each _Node_, navigate to /src/main/java/uoa.nightingales.xxxxxx/xxxxxxxApplication.java, and run this application file for each node
- If you encounter exceptions or warnings, it is because you specified your Java Version wrongly.
  - You can fix this by clicking on File => Project Structure => SDK => Choose corretto-17
  - If corretto-17 is not in the list => + Add SDK => Download SDK => Choose Version 17, and download the corretto version of JDK
  - Correctly configured settings will look like
 ![image](https://github.com/UOA-CS732-SE750-Students-2024/project-group-noble-nightingales/assets/100816909/fedd134d-e0fe-4f92-b313-389d71e7de2c)

- Now rerun the application entry file for each service node if you did not run it successfully in the previous step
- By now, you should have all the 6 Java Servers Running

## Download Java 17 (Option 2)
### Checking Existing Java Installation

Before installing Java 17, it's important to check if you already have it installed.

1. Open your command line interface:
   - **Windows**: Open Command Prompt.
   - **macOS/Linux**: Open Terminal.

2. Check your Java version:
   ```bash
   java -version

- If Java 17 is already installed and set as the default, you can proceed to running your application.
- If another version is installed, or if Java is not installed, follow the installation steps below.

### Installing Java 17

**Oracle JDK 17**
- Download from [Oracle](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html) Downloads.
- Select the installer for your operating system and follow the on-screen instructions. Use the MSI installer if using Windows.

### Installation Instructions
- Windows: Run the downloaded installer and follow the instructions.
- macOS: Open the .pkg file and follow the instructions.
- Linux: Use a package manager or extract the tar.gz file to an appropriate location.

### Setting Environment Variables
After installation, set JAVA_HOME and update the system PATH.

#### Windows
1. Search for "Edit the system environment variables" in the Control Panel.
2. Click "Environment Variables".
3. Set `JAVA_HOME` to your Java installation directory (e.g., `C:\Program Files\Java\jdk-17.x.x`).
4. Add `%JAVA_HOME%\bin` to the Path variable.

#### Mac OS
1. Open your shell profile file (~/.bash_profile, ~/.bashrc, or ~/.zshrc).
2. Add the following lines:
```bash
export JAVA_HOME=`/usr/libexec/java_home -v17`
export PATH=$JAVA_HOME/bin:$PATH
```
3. Apply the changes:
```bash
source ~/.bash_profile
```
### Check your installation
- reopen terminal / command prompt and run `java -version`
- [JDK 17 Installation Guide For Windows](https://www.youtube.com/watch?v=TVvcRHuv844)
- [JDK 17 Installation Guide For MacOS](https://www.youtube.com/watch?v=8ujwW4iKsk0)

### After Installing Java
1. Download all the Jar files from [release](https://github.com/UOA-CS732-SE750-Students-2024/project-group-noble-nightingales/releases/tag/Spring-Cluster)
2. navigate to the folder where you downloaded the jar files and run `java -jar xxxxxx.jar` on every service nodes e.g. `java -jar AIServiceNode-0.0.1-SNAPSHOT.jar`
3. Make sure you open a **new** command window for each node

**By now, you should have had all 6 spring servers running**

## Free the required ports
- The required port numbers for this application are [30054, 30055, 30056, 30053, 30050, 30051, 5000]
### For Linux/macOS

1. **Check Port Usage:**
   ```bash
   sudo lsof -i :30054
   sudo lsof -i :30055
   sudo lsof -i :30056
   sudo lsof -i :30053
   sudo lsof -i :30050
   sudo lsof -i :30051
   sudo lsof -i :5000
   ```
2. If a process is using any of these ports, terminate it using its PID: `kill -9 PID`

### For Windows
```
netstat -ano | findstr :30054
netstat -ano | findstr :30055
netstat -ano | findstr :30056
netstat -ano | findstr :30053
netstat -ano | findstr :30050
netstat -ano | findstr :30051
netstat -ano | findstr :5000
```
If a port is in use, terminate the process using taskkill with its PID:
```
taskkill /PID <PID> /F
```

**Also ensure MongoDB is running without authentication enabled (This is the default option if you have not changed it before)**

## Run the application in development mode
- You should already have had all 6 Java servers running
- Navigate to frontend folder
- `cd frontend-react`
- `npm install` => `npm run dev`
- `cd..`
- `cd frontend-server`
- `npm install` => `npm start`
- Then you should be able to view our pages on browser

## Run the application in production mode
- You should still have had all 6 Java servers running
- At root directory `git checkout BUILD-VERSION`
- navigate to frontend-react folder
- `npm install` => `npm run build`
- navigate to frontend-server folder
- `npm install` => `npm start`
- Then you should be able to view our pages

## Pages
### Explore Page 
- #### Intro
![image](https://github.com/UOA-CS732-SE750-Students-2024/project-group-noble-nightingales/assets/100254883/548747cd-9896-4577-87ae-cf9f91f7707b)
- #### Youtube Video
![image](https://github.com/UOA-CS732-SE750-Students-2024/project-group-noble-nightingales/assets/100254883/cb896e8c-94c3-4956-ab5f-6f6081cc45f5)

- #### Spotify Video
![image](https://github.com/UOA-CS732-SE750-Students-2024/project-group-noble-nightingales/assets/100254883/b31075c2-80e8-4c73-8eb8-9bd924325622)

- #### News Letter
![image](https://github.com/UOA-CS732-SE750-Students-2024/project-group-noble-nightingales/assets/100254883/b9b38755-c974-4de4-af47-d70e4f16ac19)



### Login Page
![image](https://github.com/UOA-CS732-SE750-Students-2024/project-group-noble-nightingales/assets/100254883/743b9dca-51c7-44bf-b5f7-b935df99d193)


### SignUp Page
![image](https://github.com/UOA-CS732-SE750-Students-2024/project-group-noble-nightingales/assets/100254883/a14ca1ca-a631-4e31-bf5d-6f16ccbb4b41)


### YouTube Page
![image](https://github.com/UOA-CS732-SE750-Students-2024/project-group-noble-nightingales/assets/100254883/a7165432-691e-4e12-8a85-dafb99dcc723)


### Youtube Player Page
![image](https://github.com/UOA-CS732-SE750-Students-2024/project-group-noble-nightingales/assets/100254883/c4ef7ff2-b40f-4dd3-b4f6-f34efd3d480a)


### Youtube Comment Page
![image](https://github.com/UOA-CS732-SE750-Students-2024/project-group-noble-nightingales/assets/100254883/1efacb9e-f0e3-4f16-baef-0d2137cbb86d)


### Spotify Page
![image](https://github.com/UOA-CS732-SE750-Students-2024/project-group-noble-nightingales/assets/100254883/3f3f9195-ddb8-4b23-bb86-4eeca0e6dbea)

- #### Spotify Login Page
  - This login is for logging into Spotify which would jump to the Spotify Website to login
 ![image](https://github.com/UOA-CS732-SE750-Students-2024/project-group-noble-nightingales/assets/100254883/ac3e5c0c-1f33-43af-bd6a-02d1f1c7c4cb)


### AI Search & AI Filter
 ![image](https://github.com/UOA-CS732-SE750-Students-2024/project-group-noble-nightingales/assets/100254883/8c17e06c-3da1-4ae5-9d00-5aaf42070897)

## Contact
| Name         | UPI         | Email               |
|:-------------|:-----------:|:--------------------|
| James Gong    | hgon777     | hgon777@aucklanduni.ac.nz   |
| Chauncey Xu   | xxu511   | xxu511@aucklanduni.ac.nz  |
| Wenliang Du | wdu735 | tthtilb@gmail.com  |
| James Gai | jgai284 | jgai284@aucklanduni.ac.nz   |
| Shiyan Gong | sgon512 | sgon512@aucklanduni.ac.nz   |
| Yue Zhu | yzhu951 | yzhu951@aucklanduni.ac.nz   |








