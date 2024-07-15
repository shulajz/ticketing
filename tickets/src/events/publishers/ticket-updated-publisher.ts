import { Publisher, Subjects, TicketUpdatedEvent } from '@shulajztickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
