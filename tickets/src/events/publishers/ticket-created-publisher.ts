import { Publisher, Subjects, TicketCreatedEvent } from '@shulajztickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
