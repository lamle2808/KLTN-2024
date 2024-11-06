package com.example.kltn.service;

import com.example.kltn.entity.Avatar;

public interface AvatarService {
    Avatar addAvatar(Avatar avatar);
    boolean check(Long id);
    Boolean remove(Long id);
    Avatar getById(Long id);
}
