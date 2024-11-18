package com.example.kltn.repository;

import com.example.kltn.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepo extends JpaRepository<Order, Long> {
    // Bạn có thể thêm các phương thức tùy chỉnh ở đây nếu cần
} 