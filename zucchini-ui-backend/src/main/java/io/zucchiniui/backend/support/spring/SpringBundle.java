package io.zucchiniui.backend.support.spring;

import io.dropwizard.Configuration;
import io.dropwizard.ConfiguredBundle;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ConfigurableApplicationContext;

import javax.ws.rs.Path;

public class SpringBundle implements ConfiguredBundle<Configuration> {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpringBundle.class);

    private final ConfigurableApplicationContext applicationContext;

    public SpringBundle(final ConfigurableApplicationContext applicationContext) {
        this.applicationContext = applicationContext;
        if (applicationContext.isActive()) {
            throw new IllegalArgumentException("Spring context already started");
        }
    }

    @Override
    public void initialize(final Bootstrap<?> bootstrap) {

    }

    @Override
    public void run(final Configuration configuration, final Environment environment) {
        environment.lifecycle().manage(new SpringContextManaged(applicationContext));

        applicationContext.getBeanFactory().registerSingleton("dropwizardConfig", configuration);
        applicationContext.getBeanFactory().registerSingleton("dropwizardEnv", environment);
        applicationContext.refresh();

        applicationContext.getBeansWithAnnotation(Path.class).forEach((name, resource) -> {
            LOGGER.info("Registring resource {}", name);
            environment.jersey().register(resource);
        });
    }

}
