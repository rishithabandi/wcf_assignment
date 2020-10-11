package com.wcf.features.services;


import com.wcf.features.entities.Feature;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

@Service
public class FeatureService {

    Map<String, Map<Integer, Feature>> data = new TreeMap<>();

    public List<Feature> getAll() {
        List<Feature> list = new LinkedList<>();
        for (Map<Integer, Feature> clientMaps : data.values()) {
            for (Feature f : clientMaps.values()) {
                list.add(f);
            }
        }


        return list;
    }

    public List<Feature> add(Feature f) {
        String client = f.getClient();
        Map<Integer, Feature> clientdata = data.get(client);
        if (clientdata == null) {
            clientdata = new TreeMap<>();
            data.put(client, clientdata);
            //return ;
        }

        insertByPriority(clientdata, f);
        return getAll();

    }

    private void insertByPriority(Map<Integer, Feature> clientdata, Feature f) {

        while (true) {
            Feature existingFeature = clientdata.get(f.getPriority());
            clientdata.put(f.getPriority(), f);

            if (existingFeature == null) {
                return;
            }
            existingFeature.setPriority(existingFeature.getPriority() + 1);
            f = existingFeature;
        }
    }
}
