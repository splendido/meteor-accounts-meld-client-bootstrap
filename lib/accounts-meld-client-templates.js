Meteor.subscribe("pendingMeldActions");
MeldActions = new Meteor.Collection('meldActions');

Template.accountsMeld.helpers({
    completed: function() {
        return MeldActions.find({meld: "done"});
    },
    melding: function() {
        return MeldActions.find({meld: "melding"});
    },
    questions: function() {
        return MeldActions.find({meld: "ask"});
    },
    visible: function(){
        return MeldActions.find().count() > 0;
    }
});

Template.meldAction.events({
    'click #meldActionYes': function(){
        MeldActions.update({_id: this._id}, {$set: {meld: 'yes'}});
    },
    'click #meldActionNotNow': function(){
        MeldActions.update({_id: this._id}, {$set: {meld: 'not_now'}});
    },
    'click #meldActionNever': function(){
        MeldActions.update({_id: this._id}, {$set: {meld: 'never'}});
    },
});

Template.meldingAction.events({
    'click #closeButton': function(e, t){
        e.preventDefault();
        MeldActions.update({_id: this._id}, {$set: {meld: 'ok'}});
    }
});

Template.meldingCompleted.events({
    'click #closeButton': function(e, t){
        e.preventDefault();
        MeldActions.remove(this._id);
    }
});
