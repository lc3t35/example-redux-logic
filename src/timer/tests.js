import expect from "expect.js";
import reducer from "./reducer";
import actions from "./actions";

/* eslint-disable func-names */
describe( "timer reducer", function( ) {
    describe( "manipulate timer", function( ) {

        context( "initial value", function( ) {
            const initialState = {
                status: "Stopped",
                seconds: 0,
            };
            const result = reducer( initialState, {} );
            it( "default action should not modify the status", function( ) {
                expect( result.status ).to.be( "Stopped" );
                expect( result.seconds ).to.be( 0 );
            } );
        } );

        context( "start timer", function( ) {
            const initialState = {
                status: "Stopped",
                seconds: 0,
            };
            const result = reducer( initialState, actions.start() );
            it( "should set the timer in the state Running", function( ) {
                expect( result.status ).to.be( "Running" );
                expect( result.seconds ).to.be( 0 );
            } );
        } );

        context( "stop timer when stopped", function( ) {
            const initialState = {
                status: "Stopped",
                seconds: 1,
            };
            const result = reducer( initialState, actions.stop() );
            it( "should keep the timer in the state Stopped", function( ) {
                expect( result.status ).to.be( "Stopped" );
                expect( result.seconds ).to.be( 1 );
            } );
        } );

        context( "stop timer when started", function( ) {
            const initialState = {
                status: "Running",
                seconds: 1,
            };
            const result = reducer( initialState, actions.stop() );
            it( "should set the timer in the state Stopped", function( ) {
                expect( result.status ).to.be( "Stopped" );
                expect( result.seconds ).to.be( 1 );
            } );
        } );

        context( "reset timer when stopped", function( ) {
            const initialState = {
                status: "Stopped",
                seconds: 1,
            };
            const result = reducer( initialState, actions.reset() );
            it( "should keep the timer in the state Stopped and seconds to 0", function( ) {
                expect( result.status ).to.be( "Stopped" );
                expect( result.seconds ).to.be( 0 );
            } );
        } );

        context( "tick timer", function( ) {
            const initialState = {
                status: "Running",
                seconds: 1,
            };
            const result = reducer( initialState, actions.tick() );
            it( "should keep the timer in the state Running and increase seconds", function( ) {
                expect( result.status ).to.be( "Running" );
                expect( result.seconds ).to.be( 2 );
            } );
        } );

    } );
} );