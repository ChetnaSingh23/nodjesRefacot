// Constants for the file
const SUBSCRIPTION_TYPE = {
    MUSIC: 'Music',
    VIDEO: 'Video',
    PODCAST: 'Podcast'
  }
  
  const BILLING_CYCLE = {
    MONTHLY: 'Monthly',
    QUARTERLY: 'Quarterly',
    ANNUALLY: 'Annual'
  }
  
  // Subscription class
  class Subscription {
    constructor(cost, billingCycle, subscriptionType) {
      this.cost = cost
      this.billingCycle = billingCycle
      this.subscriptionType = subscriptionType
    }
  
    initiateSubscription() {
      console.log(`Initiating ${this.subscriptionType} subscription with cost ${this.cost} and billing cycle ${this.billingCycle}`)
    }
  }
  
  // VideoSubscription class
  class VideoSubscription extends Subscription {
    constructor(billingCycle) {
      const cost = {
        [BILLING_CYCLE.MONTHLY]: 10,
        [BILLING_CYCLE.QUARTERLY]: 20,
        [BILLING_CYCLE.ANNUALLY]: 60
      }[billingCycle]
  
      super(cost, billingCycle, SUBSCRIPTION_TYPE.VIDEO)
    }
  }
  
  // MusicSubscription class
  class MusicSubscription extends Subscription {
    constructor(billingCycle) {
      const cost = {
        [BILLING_CYCLE.MONTHLY]: 20,
        [BILLING_CYCLE.QUARTERLY]: 50,
        [BILLING_CYCLE.ANNUALLY]: 150
      }[billingCycle]
  
      super(cost, billingCycle, SUBSCRIPTION_TYPE.MUSIC)
    }
  }
  
  // PodcastSubscription class
  class PodcastSubscription extends Subscription {
    constructor(billingCycle) {
      const cost = {
        [BILLING_CYCLE.MONTHLY]: 50,
        [BILLING_CYCLE.QUARTERLY]: 100,
        [BILLING_CYCLE.ANNUALLY]: 300
      }[billingCycle]
  
      super(cost, billingCycle, SUBSCRIPTION_TYPE.PODCAST)
    }
  }
  
  // SubscriptionFactory class
  class SubscriptionFactory {
    static createSubscription(subscriptionType, billingCycle) {
      switch (subscriptionType) {
        case SUBSCRIPTION_TYPE.VIDEO:
          return new VideoSubscription(billingCycle)
        case SUBSCRIPTION_TYPE.MUSIC:
          return new MusicSubscription(billingCycle)
        case SUBSCRIPTION_TYPE.PODCAST:
          return new PodcastSubscription(billingCycle)
        default:
          throw new Error(`Invalid subscription type: ${subscriptionType}`)
      }
    }
  }
  
  // Usage:
  const musicSubscription = SubscriptionFactory.createSubscription(SUBSCRIPTION_TYPE.MUSIC, BILLING_CYCLE.MONTHLY)
  const videoSubscription = SubscriptionFactory.createSubscription(SUBSCRIPTION_TYPE.VIDEO, BILLING_CYCLE.QUARTERLY)
  const podcastSubscription = SubscriptionFactory.createSubscription(SUBSCRIPTION_TYPE.PODCAST, BILLING_CYCLE.ANNUALLY)
  
  musicSubscription.initiateSubscription() // Initiating Music subscription with cost 20 and billing cycle Monthly
  videoSubscription.initiateSubscription() // Initiating Video subscription with cost 20 and billing cycle Quarterly
  podcastSubscription.initiateSubscription() // Initiating Podcast subscription with cost 300 and billing cycle Annual
  
