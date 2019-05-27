package by.tolkun.plenta.util;

import java.util.*;

public class FilterConfig {
    private List<Map.Entry<Date, Date>> dateIntervals;
    private List<String> authors;
    private List<String> tags;

    public List<Map.Entry<Date, Date>> getDateIntervals() {
        return dateIntervals;
    }

    public void setDateIntervals(final List<Map.Entry<Date, Date>> dateIntervals) {
        this.dateIntervals = dateIntervals;
    }

    public List<String> getAuthors() {
        return authors;
    }

    public void setAuthors(final List<String> authors) {
        this.authors = authors;
    }

    public List<String> getTags() {
        return tags;
    }

    public void setTags(final List<String> tags) {
        this.tags = tags;
    }
}
