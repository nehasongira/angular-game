package com.stackroute.game.controller;

import com.stackroute.game.domain.Player;
import com.stackroute.game.repository.ScoreRepository;
import com.stackroute.game.service.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import javax.validation.Valid;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class PlayerController {

    @Autowired
    ScoreRepository scoreRepository;


//    class SortbyScore implements Comparator<Player>
//    {
//        // Used for sorting in ascending order of
//        // roll number
//        @Override
//        public int compare(Player a, Player b)
//        {
//            return a.getScore() - b.getScore();
//        }
//
//    }

    @PostMapping("/players")
    public Player createTable(@Valid @RequestBody Player player) {

//        ArrayList<Player> ar = new ArrayList<Player>();
//        Collections.sort(ar, new SortbyScore());

//        Player player=new Player();
//        List<Player> list = scoreRepository.findAll();
//////        Collections.sort(list, (p1, p2) -> p1.getScore() - p2.getScore());
////
//        Collections.sort(list, new Comparator<Player>() {
//
//            public int compare(Player p1, Player p2) {
//                return p1.getScore() - p2.getScore();
//            }
//        });

        return scoreRepository.save(player);
    }
    @GetMapping("/players")
    public List<Player> getAllPlayer() {

        return scoreRepository.findAll();
    }
}


