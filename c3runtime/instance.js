"use strict";
{


    globalThis.C3.Plugins.EMI_INDO_MusicControls.Instance = class MusicControlsInstance extends globalThis.ISDKInstanceBase
    {
        constructor()
        {
            super();

            const properties = this._getInitProperties();


            if (properties)
            {

                this.a = properties[0]; // ----------
                this.b = properties[1];
                this.c = properties[2];
                this.d = properties[3];
                this.e = properties[4];
                this.f = properties[5];
                this.g = properties[6];
                this.h = properties[7];
                this.i = properties[8]; // -----------
                this.j = properties[9];
                this.k = properties[10];
                this.l = properties[11];
                this.m = properties[12];
                this.n = properties[13];
                this.o = properties[14];
                this.p = properties[15]; // ---------------
                this.q = properties[16];
                this.r = properties[17];
                this.s = properties[18];
                this.t = properties[19];
                this.u = properties[20];
                this.v = properties[21];
                this.w = properties[22]; // ----------


            }

            if (typeof MusicControls == 'undefined')
            {
                return;
            }
      

            this.EMI_INDOcnds = globalThis.C3.Plugins.EMI_INDO_MusicControls.Cnds;

            this.EMI_INDO = MusicControls;

            this.res = "";


        }

        _release()
        {
            super._release();
        }

        _saveToJson()
        {
            return {
                // data to be saved for savegames
            };
        }

        _loadFromJson(o)
        {
            // load state for savegames
        }

    };
}