"use strict";
{
    globalThis.C3.Plugins.EMI_INDO_MusicControls.Acts = {
        Create()
        {
            if (typeof MusicControls == 'undefined')
            {
                return;
            }
            
            const self = this;

            this.EMI_INDO.create(
            {
                track: self.a,
                artist: self.b,
                album: self.c,
                cover: self.d,

                isPlaying: self.e,
                dismissable: self.f,


                hasPrev: self.g,
                hasNext: self.h,
                hasClose: self.i,

                // iOS only, optional

                duration: self.j,
                elapsed: self.k,
                hasSkipForward: self.l,
                hasSkipBackward: self.m,
                skipForwardInterval: self.n,
                skipBackwardInterval: self.o,
                hasScrubbing: self.p,

                // Android only, optional

                ticker: self.q,

                playIcon: self.r,
                pauseIcon: self.s,
                prevIcon: self.t,
                nextIcon: self.u,
                closeIcon: self.v,
                notificationIcon: self.w,
            }, onSuccess, onError);


            function onSuccess(result)
            {
                self.res = (result);
            }

            function onError(result)
            {
                self.res = (result);
            }


        },

        Destroy()
        {
            if (typeof MusicControls == 'undefined')
            {
                return;
            }
            
            const self = this;
            this.EMI_INDO.destroy(onSuccess, onError);

            function onSuccess(result)
            {
                self.res = (result);
            }

            function onError(result)
            {
                self.res = (result);
            }


        },

        Events_Case(action)
        {
            if (typeof MusicControls == 'undefined')
            {
                return;
            }
            
            const self = this;

            function events(action)
            {

                const message = JSON.parse(action).message;
                switch (message)
                {
                    case 'music-controls-next':
                        self.res = (action);
                        self._trigger(self.EMI_INDOcnds.Next);

                        break;
                    case 'music-controls-previous':
                        self.res = (action);
                        self._trigger(self.EMI_INDOcnds.Previous);
                        break;
                    case 'music-controls-pause':
                        self.res = (action);
                        self._trigger(self.EMI_INDOcnds.Pause);
                        break;
                    case 'music-controls-play':
                        self.res = (action);
                        self._trigger(self.EMI_INDOcnds.Play);
                        break;
                    case 'music-controls-destroy':
                        self.res = (action);
                        self._trigger(self.EMI_INDOcnds.Destroy);
                        break;

                        // External controls (iOS only)
                    case 'music-controls-toggle-play-pause':
                        self.res = (action);
                        self._trigger(self.EMI_INDOcnds.Ipause);
                        break;
                    case 'music-controls-seek-to':
                        const seekToInSeconds = JSON.parse(action).position;
                        MusicControls.updateElapsed(
                        {
                            elapsed: seekToInSeconds,
                            isPlaying: true
                        });
                        self.res = (action);
                        self._trigger(self.EMI_INDOcnds.Seek_To);
                        break;

                        // Headset events (Android only)
                        // All media button events are listed below
                    case 'music-controls-media-button':
                        self.res = (action);
                        self._trigger(self.EMI_INDOcnds.Media_Button);
                        break;
                    case 'music-controls-headset-unplugged':
                        self.res = (action);
                        self._trigger(self.EMI_INDOcnds.Headse_Unplugged);
                        break;
                    case 'music-controls-headset-plugged':
                        self.res = (action);
                        self._trigger(self.EMI_INDOcnds.Headset_Plugged);
                        break;
                    default:
                        break;
                }
            }

            this.EMI_INDO.subscribe(events);

            this.EMI_INDO.listen();

        }
    };
}