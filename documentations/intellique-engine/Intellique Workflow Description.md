

# IntelliQue Engine

> IntelliQue Engine is the core of this web application, and it is responsible for the content delivery functionality

[TOC]



## YouTube Module

### Data Structures

1. `List<UserRecord>`: This list stores the significance of each genre to the user in sorted order

2. `List<ChannelRecord>`: This list stores the significance of each channel to the user in sorted order

3. ```java
   public class UserRecord{
       private Genre genre;
       private Integer significance;
   }
   ```

4. ```java
   public class ChannelRecord{
       private String channelId;
       private Integer significance
   }
   ```

5. ```java
   public enum Genre{
       // Many more types
       FICTION,
       SPORTS,
       HEALTH
   }
   ```

## Workflow

1. When a user views a video, the description of the video will be sent to AI API for extraction of genres
2.  The extracted genres are compared with the `genre` fields in the `List<UserRecord>`, if there are matches, the `significance` field of that `UserRecord` object will increase, and the list will be reordered based on the new significance level.
3. Similarly, the channel of the viewed video increases the the significance of that `ChannelRecord` object in the `List<ChannelRecord>`
4. When a user utilizes the AI recommendation tool, the genres hidden inside the text will be extracted via AI, and the respective significance of the `UserRecord` object will increase
5. Similarly, when a user utilizes the AI filtering tool, the significance level of the genre hidden inside will decrease



## Algorithm







