package com.wcf.features.endpoints;


import com.wcf.features.entities.Feature;
import com.wcf.features.services.FeatureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/features")
@CrossOrigin(origins = "http://localhost:5200")
public class FeaturesRESTController {

    @Autowired
    FeatureService service;

    @GetMapping()
    @ResponseStatus(HttpStatus.OK)
    List<Feature> getFeatures() {
        return service.getAll();
    }


    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    List<Feature> addFeature(@RequestBody Feature f) {
        return service.add(f);
    }

}
