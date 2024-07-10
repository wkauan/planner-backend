import cors from "@fastify/cors";
import fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";
import { confirmParticipant } from "./routes/confirm-participant";
import { confirmTrp } from "./routes/confirm-trip";
import { createTrip } from "./routes/create-trip";
import { createActivity } from "./routes/create-activity";
import { getActivities } from "./routes/get-activities";

const app = fastify();

app.register(cors, {
  origin: "*",
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createTrip);
app.register(confirmTrp);
app.register(confirmParticipant);
app.register(createActivity);
app.register(getActivities);

app.listen({ port: 3333 }).then(() => {
  console.log("server running!");
});
