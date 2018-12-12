interface EventsList {
    events: Array<Event>
    filterCategory: string
    filterText: string
    numberOfUsers: string
    isFavourite(event: Event): void
}

interface Event {
    name: string
    date: Date
    key: string
    photo: string
    city: string
    street: string
}

interface SearchForm {
    onFilteredTextChangeHandler(p1: SuperEvent) : void
    handleUsersChange(p1: SuperEvent) : void
    handleEventsFilterCategoryChange(p1: SuperEvent) : void
    filterCategory: string
    filterText: string
    numberOfUsers: number
}

interface SuperEvent {
    target: {
        value: string
    }
}
