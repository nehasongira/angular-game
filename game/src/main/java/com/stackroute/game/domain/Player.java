package com.stackroute.game.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="scores")
public class Player {
    @Id
    private String playerName;
    private int score;

    public String getPlayerName() {
        return playerName;
    }

    public void setPlayerName(String playerName) {
        this.playerName = playerName;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public Player(String playerName, int score) {
        this.playerName = playerName;
        this.score = score;
    }
    public Player()
    {}



}
