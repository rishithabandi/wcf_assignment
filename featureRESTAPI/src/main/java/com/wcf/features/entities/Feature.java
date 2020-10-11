package com.wcf.features.entities;

import java.time.LocalDate;
import java.util.Objects;

public class Feature {

    private String title;

    private String description;

    private String client;

    private Integer priority;

    private String productArea;
    private LocalDate targetDate;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Feature feature = (Feature) o;
        return Objects.equals(title, feature.title) &&
                Objects.equals(description, feature.description) &&
                Objects.equals(client, feature.client) &&
                Objects.equals(priority, feature.priority) &&
                Objects.equals(productArea, feature.productArea) &&
                Objects.equals(targetDate, feature.targetDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(title, description, client, priority, productArea, targetDate);
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getClient() {
        return client;
    }

    public void setClient(String client) {
        this.client = client;
    }

    public int getPriority() {
        return priority;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }

    public String getProductArea() {
        return productArea;
    }

    public void setProductArea(String productArea) {
        this.productArea = productArea;
    }

    public LocalDate getTargetDate() {
        return targetDate;
    }

    public void setTargetDate(LocalDate targetDate) {
        this.targetDate = targetDate;
    }
}

